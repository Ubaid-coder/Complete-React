

export default function ContextMenu({
  menuPosition,
  setmenuPosition,
  setExpenses,
  rowid
}) {
  if (!menuPosition.left || !menuPosition.top) return;

  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={() => {
        console.log('Edit');
        setmenuPosition({});
      }}>Edit</div>

      <div onClick={() => {
        setExpenses((preState) =>  preState.filter((expnese) => expnese.id != rowid) );
        setmenuPosition({});
      }}>Delete</div>
    </div>
  )
}