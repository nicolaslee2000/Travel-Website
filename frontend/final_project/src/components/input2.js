import React, { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';

const Input = () => {
  const { input, insertTodo, handleChangeText } = useContext(InputContext);

  return (
    <form onSubmit={insertTodo}>
      <input
        type='text'
        required={true}
        value={input}
        onChange={handleChangeText}
      />
      <input type='submit' value='Create' />
    </form>
  );
};

export default Input;
