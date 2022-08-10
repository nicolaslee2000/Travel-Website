import React from 'react';

const Input = (props) => {
  const { input, insertTodo, handleChangeText } = props;

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
