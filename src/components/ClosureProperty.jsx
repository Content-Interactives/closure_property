import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Lightbulb } from 'lucide-react';

const ClosureProperty = () => {
  const [num1, setNum1] = useState(2);
  const [num2, setNum2] = useState(3);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(5);

  const operations = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
  };

  const operationSymbols = {
    add: '+',
    multiply: '×'
  };

  const opWords = {
    add: 'addition',
    multiply: 'multiplication'
  };

  useEffect(() => {
    setResult(operations[operation](num1, num2));
  }, [num1, num2, operation]);

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <Card className="w-full max-w-2xl mx-auto shadow-md bg-white">
        <CardHeader className="bg-sky-100 text-sky-800">
          <CardTitle className="text-3xl font-bold">Closure Property</CardTitle>
          <CardDescription className="text-sky-700 text-lg">
            Explore how operations on rational numbers maintain closure!
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6 pt-6">
          <Alert className="bg-blue-50 border-blue-100">
            <Lightbulb className="h-4 w-4 text-blue-400" />
            <AlertTitle className="text-blue-700">What is the Closure Property?</AlertTitle>
            <AlertDescription className="text-blue-600">
              A set has the closure property under an operation if performing that operation 
              on any elements from the set always produces a result that is also in the set. 
              For example, when you add or multiply rational numbers, 
              the result is always a rational number.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Any addition or multiplication operation done with rational numbers 
              will result in a rational number. Test it out below!
            </p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-sky-700 mb-1">First Number</label>
                <input
                  type="number"
                  value={num1}
                  onChange={(e) => setNum1(parseFloat(e.target.value))}
                  className="w-full p-2 border rounded"
                  step="any"
                  maxLength={9}
                  onInput={(e) => {
                    if (e.target.value.length > 9) {
                      e.target.value = e.target.value.slice(0, 9);
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-700 mb-1">Operation</label>
                <select
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  className="w-full p-2 border rounded text-gray-700 appearance-none"
                >
                  <option value="add">Addition (+)</option>
                  <option value="multiply">Multiplication (×)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-700 mb-1">Second Number</label>
                <input
                  type="number"
                  value={num2}
                  onChange={(e) => setNum2(parseFloat(e.target.value))}
                  className="w-full p-2 border rounded"
                  step="any"
                  maxLength={9}
                  onInput={(e) => {
                    if (e.target.value.length > 9) {
                      e.target.value = e.target.value.slice(0, 9);
                    }
                  }}
                />
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-6xl font-bold mb-2">
                {num1} {operationSymbols[operation]} {num2} = {result}
              </p>
              <p className="text-xl text-gray-600">
                {result} is a rational number, confirming the closure property of rational numbers under {opWords[operation]}!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClosureProperty;