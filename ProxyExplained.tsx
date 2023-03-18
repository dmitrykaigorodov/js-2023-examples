import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// Primary button
const PrimaryBtn = (props) => <Btn {...props} primary />;

// Button
const Btn = ({ className = '', title, primary, children, ...props }) => (
  <button
    type="button"
    className={
      `m-4 py-1 px-3 rounded font-semibold 
      ${!primary && "bg-gray-400"}
      ${primary && "bg-fuchsia-500"}
      ${className}`}
    {...props}
  >{title || children}</button>);

// Border higher order component
export const BorderHoc = (Component) => {
  return (props) => <Component {...props} className="border-2 border-black" />
}

// Bordered button
const Bordered = BorderHoc(Btn)

// Border higher order component explained
export const ProxyExplained = (() => (
  <div className="bg-gray-100 p-8">
    <Btn primary={true} className="border-black border"
      title={
        <div className="flex justify-between py-2 px-4">
          <div><UserCircleIcon className="h-6" /></div>
          <div>Tanya</div>
        </div>
      }>
    </Btn >
    <Btn primary={false}>Pawiel</Btn>
    <Bordered>Alesya</Bordered>
    <Bordered>Dmitry</Bordered>
  </div >
))

// Drop file zone
export const DropFileZone = ({ children, ...props }) => {
  const [isDraggingOver, isDraggingOverSet] = useState(false)
  return (
    <div {...props}>
      <div {...props}>
        {/* cover bg as modal */}
        {isDraggingOver && <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>}
        {children}
      </div >
    </div >
  )
}
