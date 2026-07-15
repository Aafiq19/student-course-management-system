import axiosInstance from './axios'

export const enrollmentApi = {
  getAllEnrollments: () => axiosInstance.get('/enrollments'),
  getEnrollmentById: (id) => axiosInstance.get(`/enrollments/${id}`),
  getStudentEnrollments: (studentId) => axiosInstance.get(`/enrollments/student/${studentId}`),
  getCourseEnrollments: (courseId) => axiosInstance.get(`/enrollments/course/${courseId}`),
  createEnrollment: (enrollmentData) => axiosInstance.post('/enrollments', enrollmentData),
  updateEnrollment: (id, enrollmentData) => axiosInstance.put(`/enrollments/${id}`, enrollmentData),
  deleteEnrollment: (id) => axiosInstance.delete(`/enrollments/${id}`),
}

export default enrollmentApi
