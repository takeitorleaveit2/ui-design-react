import React, { useState } from "react";

interface elementProps {
  /** The indicate which is selected */
  selected?: boolean | undefined;
  /** The id of the element */
  id?: string | undefined;
  /** The name of the element */
  inputName?: string | undefined;
}

interface toggleButtonProps<T extends elementProps> {
  /** The text to display inside the button */
  name: string;
  /** The content of the button */
  elements: T[];
  /** */
  multipleChoice?: boolean;
  /** The content of the button */
  children: (arg: T) => JSX.Element;
  setSelected?: (e: boolean) => void;
}

export default function MyComponent<T extends elementProps>({
  name,
  elements,
  multipleChoice,
  children,
  setSelected,
}: toggleButtonProps<T>) {
  let [selectedState, setSelectedState] = useState<{
    [key: string]: string;
  }>({});
  return (
    <div className="card shadow w-100 mt-3" style={{ width: "max-content" }}>
      <div className="card-body">
        <div className="px-0">
          {elements.map((element, i) => {
            let id = element.id || name + "-option" + i;
            return (
              <>
                <input
                  type={multipleChoice ? "checkbox" : "radio"}
                  className="btn-check"
                  name={
                    multipleChoice ? element.inputName ?? name + i : name ?? ""
                  }
                  id={id || name + "-option" + i}
                  autoComplete="off"
                  defaultChecked={element.selected}
                  onChange={(e) => {
                    if (!setSelected) return;

                    if (multipleChoice) {
                      if (selectedState.hasOwnProperty(id)) {
                        delete selectedState[id];
                      } else selectedState[id] = id;

                      console.table(selectedState);

                      setSelectedState(selectedState);

                      setSelected(Object.keys(selectedState).length > 0);
                    } else {
                      //always tru due radio button not being able to be unchecked
                      setSelected(true);
                    }
                  }}
                ></input>
                <label
                  className="btn btn-outline-primary d-flex flex-wrap mt-1 text-start text-black"
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
