const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts.js");
const express = require("express");
const Joi = require("joi");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await listContacts();
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
  });
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);

  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Contact with id=${contactId} not found`,
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
});

router.post("/", async (req, res, next) => {
  const { name, email, phone } = req.body;

  const schema = Joi.object({
    name: Joi.string()

      .min(3)
      .max(30)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string()

      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  });
  const validationResult = schema.validate({ name, email, phone });

  if (validationResult.error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: validationResult.error.message,
    });
  }
  const result = await addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "not found",
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: { result },
  });
});

router.put("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string()

      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  });
  const validationResult = schema.validate({ name, email, phone });

  if (validationResult.error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: validationResult.error.message,
    });
  }
  const result = await updateContact(contactId, req.body);
  if (result) {
    res.status(200).json({
      message: "contact successfully updated",
      code: 200,
      data: { result },
    });
  }
});

module.exports = router;
