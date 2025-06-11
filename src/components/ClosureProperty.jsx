import React, { useState, useEffect } from 'react';

const ClosureProperty = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(0);

  const operations = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
  };

  const operationSymbols = {
    add: '+',
    multiply: '×'
  };

  const handleInputChange = (value, setter) => {
    if (value === '') {
      setter('');
      return;
    }

    if (value.includes('e') || value.includes('-')) {
      return;
    }

    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0 && num <= 1000) {
      setter(value);
    }
  };

  useEffect(() => {
    const safeNum1 = num1 === '' ? 0 : parseFloat(num1);
    const safeNum2 = num2 === '' ? 0 : parseFloat(num2);
    setResult(operations[operation](safeNum1, safeNum2));
  }, [num1, num2, operation]);

  return (
    <div className="w-full max-w-md mx-auto mt-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg overflow-hidden">
      <div className="p-3 space-y-3">
        <div className="space-y-2">
          <div className="flex flex-col space-y-1">
            <label className="block text-sm pb-2 font-medium text-[#5750E3] opacity-100">
              Explore the closure property:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="number"
                value={num1}
                onChange={(e) => handleInputChange(e.target.value, setNum1)}
                className="w-full p-2 border rounded"
                step="any"
                min="0"
                max="1000"
                maxLength={9}
                placeholder="0"
                onKeyDown={(e) => {
                  if (e.key === 'e' || e.key === '-') {
                    e.preventDefault();
                  }
                }}
              />
              <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="w-full p-2 border rounded text-gray-700"
              >
                <option value="add">+</option>
                <option value="multiply">×</option>
              </select>
              <input
                type="number"
                value={num2}
                onChange={(e) => handleInputChange(e.target.value, setNum2)}
                className="w-full p-2 border rounded"
                step="any"
                min="0"
                max="1000"
                maxLength={9}
                placeholder="0"
                onKeyDown={(e) => {
                  if (e.key === 'e' || e.key === '-') {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 rounded-b-lg">
        <div className="w-full p-4 bg-white border border-green-200 rounded-md">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#008545]">
              {num1 || 0} {operationSymbols[operation]} {num2 || 0} = {result}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              The result is always a rational number!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosureProperty;