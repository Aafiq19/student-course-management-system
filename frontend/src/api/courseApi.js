import axiosInstance from './axios'

export const courseApi = {
  getAllCourses: () => axiosInstance.get('/courses'),
  getCourseById: (id) => axiosInstance.get(`/courses/${id}`),
  createCourse: (courseData) => axiosInstance.post('/courses', courseData),
  updateCourse: (id, courseData) => axiosInstance.put(`/courses/${id}`, courseData),
  deleteCourse: (id) => axiosInstance.delete(`/courses/${id}`),
}

export default courseApi
