export const removeTemplateFromList = (templates, removeItem) => {
  return templates.filter((item) => item._id !== removeItem);
};

export const addTemplateToList = (templates, templateObj) => {
  templates.unshift(templateObj);
  return templates;
};
