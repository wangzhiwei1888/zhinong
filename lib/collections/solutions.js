solution = new Meteor.Collection('solution');
solutionSchema = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function(data) {
     if (data.userId !== null && data.userId !== undefined) {
       return data.userId;
     }
     if (this.isInsert) {
       return Meteor.userId();
     } else if (this.isUpsert) {
       return {
         $setOnInsert: Meteor.userId()
       };
     } else {
       this.unset();
     }
   },
   denyUpdate: true,
  },
  pestId: {
    type: String,
    optional: false
  },
  solution1: {
    type: Object
  },
  'solution1.pname': {
    label: "Product Name",
    autoform: {
      afFieldInput: {
        placeholder: "Eg. butachlor"
      }
    },
    type: String
  },
  'solution1.Formulation': {
    allowedValues: ["EC","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA"],
    autoform: {
      afFieldInput: {
        firstOption: "select a reason"
      }
    },
    type: String
  },
  'solution1.Content': {
    autoform: {
      afFieldInput: {
        placeholder: "Eg. 60%"
      }
    },
    type: String
  },
  'solution1.Dossage': {
    type: String
  },
  'solution1.Ussage': {
    type: String,
    autoform: {
       rows: 3
    }
  },
  solution2: {
    type: Object
  },
  'solution2.pname': {
    label: "Product Name",
    autoform: {
      afFieldInput: {
        placeholder: "Eg. butachlor"
      }
    },
    type: String
  },
  'solution2.Formulation': {
    allowedValues: ["EC","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA"],
    autoform: {
      afFieldInput: {
        firstOption: "select a reason"
      }
    },
    type: String
  },
  'solution2.Content': {
    autoform: {
      afFieldInput: {
        placeholder: "Eg. 60%"
      }
    },
    type: String
  },
  'solution2.Dossage': {
    type: String
  },
  'solution2.Ussage': {
    type: String,
    autoform: {
       rows: 3
    }
  },
  solution3: {
    type: Object
  },
  'solution3.pname': {
    label: "Product Name",
    autoform: {
      afFieldInput: {
        placeholder: "Eg. butachlor"
      }
    },
    type: String
  },
  'solution3.Formulation': {
    allowedValues: ["EC","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA"],
    autoform: {
      afFieldInput: {
        firstOption: "select a reason"
      }
    },
    type: String
  },
  'solution3.Content': {
    autoform: {
      afFieldInput: {
        placeholder: "Eg. 60%"
      }
    },
    type: String
  },
  'solution3.Dossage': {
    type: String
  },
  'solution3.Ussage': {
    type: String,
    autoform: {
       rows: 3
    }
  },
  solution4: {
    type: Object
  },
  'solution4.pname': {
    label: "Product Name",
    autoform: {
      afFieldInput: {
        placeholder: "Eg. butachlor"
      }
    },
    type: String
  },
  'solution4.Formulation': {
    allowedValues: ["EC","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA"],
    autoform: {
      afFieldInput: {
        firstOption: "select a reason"
      }
    },
    type: String
  },
  'solution4.Content': {
    autoform: {
      afFieldInput: {
        placeholder: "Eg. 60%"
      }
    },
    type: String
  },
  'solution4.Dossage': {
    type: String
  },
  'solution4.Ussage': {
    type: String,
    autoform: {
       rows: 3
    }
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

// Must remember to attach the schema to the collection
solution.attachSchema(solutionSchema);

// Custom validation messages with SimpleSchema. Remove if not needed
solution.simpleSchema().messages({
  required: "[label]is Required",
  minString: "[label]不能少于[min]个字符",
  maxString: "[label]不能超过[max]个字符",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});
