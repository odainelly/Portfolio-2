

// export default function Card() {
//   return (
//     <div
//       className="
//         group w-64 p-6 rounded-2xl border border-gray-300 
//         bg-white shadow-md 
//         transition-all duration-300 ease-out
//         hover:-translate-y-3 hover:scale-105
//         hover:border-orange-500 hover:bg-orange-50
//       "
//     >
//       <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">
//         Card Title
//       </h3>

//       <p className="text-gray-600">
//         This is the card content. It transforms upward and changes color on hover.
//       </p>
//     </div>
//   );
// }


export default function Card({
  title,
  description,
  icon,
  className = "",
  children,
}) {
  return (
    <div
      className={`
        group w-54 p-6 rounded-2xl border border-gray-300 
        bg-white shadow-md transition-all duration-300 ease-out
        hover:-translate-y-3 hover:scale-105 
        hover:border-orange-500 hover:bg-orange-50
        ${className}
      `}
    >
      {icon && <div className="mb-3 text-orange-500">{icon}</div>}

      {title && (
        <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-gray-600">
          {description}
        </p>
      )}

      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}


