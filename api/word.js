import axiosInstance from "@/lib/axiosInstance";

export const getWord = async (wordId, setWord, setLoading) => {
  setLoading(true);
  await axiosInstance
    .get(`/api/v1/word/${wordId}`)
    .then((res) => {
      setWord(res.data.data);
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    });
};
