

export default function ContextMenu({
  menuPosition,
  setmenuPosition,
  setExpenses,
  setExpense,
  expenses,
  seteditingRowId,
  rowid
}) {
  if (!menuPosition.left || !menuPosition.top) return;

  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={() => {
        
        const foundExpnese = expenses.find((expense) => expense.id == rowid );
        seteditingRowId(rowid)
        setExpense({
          title: foundExpnese.title,
          category: foundExpnese.category,
          amount: foundExpnese.amount
        })
        setmenuPosition({});
      }}>Edit</div>

      <div onClick={() => {
        setExpenses((preState) =>  preState.filter((expnese) => expnese.id != rowid) );
        setmenuPosition({});
      }}>Delete</div>
    </div>
  )
}