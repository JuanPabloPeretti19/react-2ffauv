import React from 'react';

export default function SideNav(props) {
  /* const handleClick = () => {
    console.log('click');
    // emite el evento onRedir
    props.onRedir("Hola!!!");
  };
  */

  const handleClick = (linkName) => {
    // console.log('click');
    // emite el evento onRedir
    props.onRedir(linkName);
  };

  return (
    <div>
      <ul>
        {props.links &&
          props.links.map((link, idx) => (
            <li key={link.path + idx}>
              {/*
              <button onClick={() => props.onRedir(link.name)}>
              */}
              <button onClick={() => handleClick(link.name)}>
                {link.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
