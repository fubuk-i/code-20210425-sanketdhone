var assert = require('assert');
const utils = require('./utils');
const fs = require('fs');
let rawdata = fs.readFileSync('testData.json');
let testData = JSON.parse(rawdata);
const result = utils.calculateBMI(testData);
describe('BMI Calcultor', () => {
    it('calculate BMI on testData[0]', () => {
      
      assert.equal(result[0],'32.83');
    });
    it('calculate BMI on testData[1]', () => {
      
      assert.equal(result[1],'32.79');
    });
    it('calculate BMI on testData[2]', () => {
      
      assert.equal(result[2],'23.77');
    });
    it('calculate BMI on testData[3]', () => {
      
      assert.equal(result[3],'22.50');
    });
    it('calculate BMI on testData[4]', () => {
      
      assert.equal(result[4],'31.11');
    });
    it('calculate BMI on testData[5]', () => {
      
      assert.equal(result[5],'29.40');
    });
    it('calculate BMI on testData[6]', () => {
     
      assert.equal(result[6],'24.49');
    });
  });

describe('BMI Mapping', () => {
      const bmiMapping = utils.mapBMI(result);
    it('Map calculated BMI on testData to give table1', () => {
      
      assert.equal(bmiMapping[0]['BMI Category'],'Moderately obese');
    });
    it('Map calculated BMI on testData to give table1', () => {
      
      assert.equal(bmiMapping[1]['BMI Category'],'Moderately obese');
    });
    it('Map calculated BMI on testData to give table1', () => {
      
      assert.equal(bmiMapping[2]['BMI Category'],'Normal weight');
    });
    it('Map calculated BMI on testData to give table1', () => {
      
      assert.equal(bmiMapping[3]['BMI Category'],'Normal weight');
    });
    it('Map calculated BMI on testData to give table1', () => {
      
      assert.equal(bmiMapping[4]['BMI Category'],'Moderately obese');
    });
    it('Map calculated BMI on testData to give table1', () => {
      
      assert.equal(bmiMapping[5]['BMI Category'],'Overweight');
    });
    it('Map calculated BMI on testData to give table1', () => {
      
      assert.equal(bmiMapping[6]['BMI Category'],'Normal weight');
    });
  });