import React, { useState, useEffect, Children } from "react";

export default function Counter({ value, increase }) {
  return (
    <div>
      <button onClick={increase}>+1</button>
      <span>-----{value}</span>
    </div>
  );
}
