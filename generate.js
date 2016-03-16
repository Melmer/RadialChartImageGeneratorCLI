'use strict';
var inquirer = require('inquirer');

var generateImages = require('./generateImages');

inquirer.prompt([
  {
    type: 'list',
    message: 'Select Radial Bar Chart Type',
    name: 'type',
    choices: [
      {
      	value: 'single',
        name: 'Single Arc'
      },
      {
      	value: 'double',
        name: 'Double Arc'
      },
      {
      	value: 'triple',
        name: 'Triple Arc'
      }
    ],
    validate: function (answer) {
      if (answer.length < 1) {
        return 'You must choose at least one topping.';
      }
      return true;
    },
    filter: function(answer){    	
		//based on the user 
    	console.log(answer);
		return answer;
    }
  },

  {
    type: 'input',
    name: 'max',
    message: 'Set the max value of the arc',
    default: function () {
      return '100';
    }
  },

  {	
  	type: 'input',
  	name: 'fgColor',
  	message: 'Set the foreground Color Start',
  	default: function(){
  		return '#FF1509'
  	},
  	validate: function (value) {

      var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value) // for #f00 (Thanks Smamatti)

      if (isValidHexColor) {
      	return true
      } 
      
      return 'This should be a valid hex color code';
      
    },

  },

  {	
  	type: 'input',
  	name: 'fgColorMid',
  	message: 'Set the foreground Color Mid',
  	default: function(){
  		return '#f8009e'
  	},
  	validate: function (value) {

      var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value) // for #f00 (Thanks Smamatti)

      if (isValidHexColor) {
      	return true
      } 
      
      return 'This should be a valid hex color code';
      
    }

},

  {	
  	type: 'input',
  	name: 'fgColorEnd',
  	message: 'Set the foreground Color End',
  	default: function(){
  		return '#f707e3'
  	},
  	validate: function (value) {

      var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value) // for #f00 (Thanks Smamatti)

      if (isValidHexColor) {
      	return true
      } 
      
      return 'This should be a valid hex color code';
      
    }

  },

  {	
  	type: 'input',
  	name: 'bgColor',
  	message: 'Set the background color',
  	default: function(){
  		return '#340914'
  	},
  	validate: function (value) {

      var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value) // for #f00 (Thanks Smamatti)

      if (isValidHexColor) {
      	return true
      } 
      
      return 'This should be a valid hex color code';
      
    }
},

 {	
  	type: 'input',
  	name: 'thickness',
  	message: 'Arc thickness',
  	default: function(){
  		return '0.2'
  	}
},

 {	
  	type: 'input',
  	name: 'bgthickness',
  	message: 'Background thickness',
  	default: function(){
  		return '0.2'
  	}
},

 {	
  	type: 'input',
  	name: 'size',
  	message: 'Size',
  	default: function(){
  		return '300'
  	}
},

 {	
  	type: 'input',
  	name: 'y-position',
  	message: 'Y position',
  	default: function(){
  		return '0'
  	}
},

 {	
  	type: 'input',
  	name: 'x-position',
  	message: 'X position',
  	default: function(){
  		return '0'
  	}
},
{
    type: 'list',
    message: 'Line Style',
    name: 'lineCap',
    choices: [
      {
      	value: 'default',
        name: 'Flat'
      },
      {
      	value: 'round',
        name: 'Round'
      }
    ],
    default: function(){
    	return 'round'
    }
  },

{
  name: 'shadow',
  type: 'confirm',
  message: 'Do you whant a shadow color?'
}, {
  when: function (response) {
    return response.shadow;
  },
	type: 'input',
  	name: 'shadow-color',
  	message: 'Cool give me the shadow color',
  	default: function(){
  		return '#555555'
  	},
  	validate: function (value) {

      var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value) // for #f00 (Thanks Smamatti)

      if (isValidHexColor) {
      	return true
      } 
      
      return 'This should be a valid hex color code';
      
    }
},

{
  name: 'show_text',
  type: 'confirm',
  message: 'Do you whant to show text.'
}, {
  when: function (response) {
    return response.show_text;
  },
	type: 'input',
  	name: 'text-color',
  	message: 'Cool give me the text color',
  	default: function(){
  		return '#555555'
  	},
  	validate: function (value) {

      var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value) // for #f00 (Thanks Smamatti)

      if (isValidHexColor) {
      	return true
      } 
      
      return 'This should be a valid hex color code';
      
    }
},
{
  name: 'show_sub_text',
  type: 'confirm',
  message: 'Do you whant to show a sub text (of {n} calls).'
}, {
  when: function (response) {
    return response.show_text;
  },
	type: 'input',
  	name: 'sub-text',
  	message: 'Nice, you can set your own subtext',
  	default: function(){
  		return 'calls'
  	}
}



], function (answers) {
  

  generateImages(answers);


  //console.log(JSON.stringify(answers, null, '  '));


});