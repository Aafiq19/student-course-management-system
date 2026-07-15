import axiosInstance from './axios'

export const studentApi = {
  getAllStudents: () => axiosInstance.get('/students'),
  getStudentById: (id) => axiosInstance.get(`/students/${id}`),
  createStudent: (studentData) => axiosInstance.post('/students', studentData),
  updateStudent: (id, studentData) => axiosInstance.put(`/students/${id}`, studentData),
  deleteStudent: (id) => axiosInstance.delete(`/students/${id}`),
}

export default studentApi
