import React, { useState } from "react";

interface elementProps {
  /** The indicate which is selected */
  selected?: boolean;
  /** The id of the element */
  id?: string;
}

interface toggleButtonProps<T extends elementProps> {
  /** The text to display inside the button */
  name: string;
  /** The content of the button */
  elements: T[];
  /** The content of the button */
  children: (arg: T) => JSX.Element;
}

export default function MyComponent<T extends elementProps>({
  name,
  elements,
  children,
}: toggleButtonProps<T>) {
  return (
    <div className="card shadow w-100 mt-3" style={{ width: "max-content" }}>
      <div className="card-body">
        <div className="px-0">
          {elements.map((element, i) => {
            let id = element.id || name + "-option" + i;
            return (
              <>
                <input
                  type="radio"
                  className="btn-check"
                  name={name}
                  id={id || name + "-option" + i}
                  autoComplete="off"
                  defaultChecked={element.selected}
                ></input>
                <label
                  className="btn btn-primary d-flex flex-wrap mt-1 text-start"
                  htmlFor={id}
                >
                  {children(element)}
                </label>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
