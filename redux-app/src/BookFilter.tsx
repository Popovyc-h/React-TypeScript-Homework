import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '@/store/store'
import { setFilter } from '@/store/actions/bookActions'

export default function BookFilter() {
  const dispatch = useDispatch()
  const currentFilter = useSelector((state: RootState) => state.filter)

  return (
    <div>
      <label>Фільтр за жанром: </label>
      <select
        value={currentFilter}
        onChange={(e) => dispatch(setFilter(e.target.value as 'all' | 'fiction' | 'science' | 'history' | 'biography'))}
      >
        <option value="all">Усі жанри</option>
        <option value="fiction">Fiction</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="biography">Biography</option>
      </select>
    </div>
  )
}
