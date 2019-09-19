import EnrollmentForm from './components/EnrollmentForm';
import ExpandedEnrollmentForm from './components/ExpandedEnrollmentForm';
import CourseEnrollmentForm from './components/CourseEnrollmentForm';

export const getActivityForm = (slug) => {
  switch (slug) {
  case 'course_enrollment':
    return <CourseEnrollmentForm
      formAction={`${process.env.GATSBY_BASE_WP_REST_API_URL}course_enrollment_form`}
    />;
  // case 'preservation_meeting_enrollment':
  //   return <ExpandedEnrollmentForm
  //     formAction={`${process.env.GATSBY_BASE_WP_REST_API_URL}preservation_meeting_enrollment_form`}
  //   />;
  case 'incubator_meeting_enrollment':
    return <ExpandedEnrollmentForm
      formAction={`${process.env.GATSBY_BASE_WP_REST_API_URL}incubator_meeting_enrollment_form`}
    />;
  case 'workshop_enrollment':
    return <EnrollmentForm
      formAction={`${process.env.GATSBY_BASE_WP_REST_API_URL}workshop_enrollment_form`}
    />;
  }
};