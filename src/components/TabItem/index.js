// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, getActiveTabApps, isActive} = props
  const {tabId, displayText} = tabItem
  const addClassName = isActive ? 'tab-button active' : 'tab-button'

  const getAppLists = () => {
    getActiveTabApps(tabId)
  }

  return (
    <li className="tabs-container">
      <button type="button" className={`${addClassName}`} onClick={getAppLists}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
