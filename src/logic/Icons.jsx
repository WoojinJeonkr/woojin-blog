import Icons from '../data/icons.json';

function GetIcons({name}) {
  const { xmlns, height, width, viewBox, paths } = Icons[name];
  const iconData = Icons[name];

  if (!iconData) {
    return `${name}에 해당하는 Icon이 없습니다.`;
  }

  const isLastItem = (itemName) => itemName === "C++" || itemName === "Intellij";

  return (
    <span style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
      <svg xmlns={xmlns} height={height} width={width} viewBox={viewBox}>
        {Array.isArray(paths) ? (
          paths.map((path, index) => (
            <path key={index} d={path.d} fill={path.fill || 'currentColor'} />
          ))
        ) : (
          <path d={paths.d} fill={paths.fill || 'currentColor'} />
        )}
      </svg>
      <span style={{ marginLeft: '8px' }}>
        {name}
      </span>
      {!isLastItem(name) && <>, </>}
    </span>
  );

}

export default GetIcons;