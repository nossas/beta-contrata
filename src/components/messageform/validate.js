
export const isEmpty = (str) => {
  return str == null || str == undefined || str.trim() == '';
};

const messagesValidate = {
  required: 'Ôpa o campo tá vazio :('
};

export default function Validate(fields, rules) {
  this.fields = fields;
  this.rules = rules;
  this.fieldKeys = Object.keys(fields);
  this.errors = {};
  this.initialize();
}

Validate.prototype.initialize = function() {
  this.fieldKeys.map(key => {
    const rules = this.rules[key];
    this.getRuleAndField(key, rules);
  });
  return this.errors;
},

Validate.prototype.getRuleAndField = function(key, rules) {
  Object.keys(rules).map((rule) => {
    const fieldRule = this.rules[key][rule];
    const fieldValue = this.fields[key];
    const validator = this[fieldRule];
    const errorMessage = validator(fieldValue);
    if (!this.errors[key]) {
      this.errors[key] = errorMessage;
    }
  });
},

Validate.prototype.getErrors = function() {
  return this.errors;
};

Validate.prototype.required = function(str) {
  return isEmpty(str) == false ? null : messagesValidate.required;
};