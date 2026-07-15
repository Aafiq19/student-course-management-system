import { useAuth } from '../../hooks/useAuth'
import './DashboardPage.css'

const DashboardPage = () => {
  const { user } = useAuth()

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="welcome-section">
        <h2>Welcome, {user?.name || 'User'}!</h2>
        <p>Student Course Management System</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p className="stat-number">--</p>
        </div>
        <div className="stat-card">
          <h3>Total Courses</h3>
          <p className="stat-number">--</p>
        </div>
        <div className="stat-card">
          <h3>Total Enrollments</h3>
          <p className="stat-number">--</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
