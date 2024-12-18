import { useGetAllAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemestersQuery(undefined);
  console.log(data);
  return <div>hiii</div>;
};

export default AcademicSemester;
