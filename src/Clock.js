import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    setInterval(() => setHora(new Date()), 1000);
  });

  return (
    <div>
      <h2>It is {hora.toLocaleTimeString()}</h2>
    </div>
  );
}
