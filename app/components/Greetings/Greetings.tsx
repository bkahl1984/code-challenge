import React from 'react';

// Define the props interface
interface GreetingsProps {
    name?: string;
  }
  
  // Functional component with default props
  const Greetings: React.FC<GreetingsProps> = ({ name = "Brad Kahl" }) => {
    return (
      <div>
        Hello, {name}!
      </div>
    );
  };
  
  export default Greetings;