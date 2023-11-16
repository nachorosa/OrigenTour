import { useState } from 'react';

const DestinyIncludes = ({ collapsablesServicios, collapsableList, handleCollapsable }) => {
  const [openCollapsables, setOpenCollapsables] = useState({});

  const toggleCollapsable = (name) => {
    setOpenCollapsables((prevOpenCollapsables) => ({
      ...prevOpenCollapsables,
      [name]: !prevOpenCollapsables[name],
    }));
    handleCollapsable(name);
  };

  return (
    <div className="colapsables-container p-8 md:p-0 mt-6 md:mb-6 md:mt-0">
      <div className="colapsable-item">
        {collapsablesServicios.map((c) => (
          <div key={c.name} onClick={() => toggleCollapsable(c.name)} className="mt-10">
            <div className="colapsable-header flex items-center justify-between">
              <h2 className="pl-4 pb-6 capitalize">{c.name}</h2>
              <span className="mb-6 collapsable-arrow">{openCollapsables[c.name] ? <img src="/src/img/arrow_forward_ios_up.svg" alt="flecha abierta"/> : <img src="/src/img/arrow_forward_ios_down.svg" alt="flecha cerrado"/>}</span>
            </div>
            {openCollapsables[c.name] ? (
              <div className="colapsable-content">
                <ul>
                  {c.content.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinyIncludes;
