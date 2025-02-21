import React from 'react';

// Define the props interface
interface GreetingsProps {
    name: string;
  }
  
  // Functional component with default props
  const Greetings: React.FC<GreetingsProps> = ({ name = "Brad Kahl" }) => {
    return (
      <div data-testid="greeting-component">
        Hello, {name}!
      </div>
    );
  };
  
  export default Greetings;