export default function createCourse(course) {
  return {
    type: 'CREATE_COURSE',
    course,
  };
}
