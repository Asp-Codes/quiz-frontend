import { apiClient } from "./RootClient";
import { quizEndpoint } from "./Endpoints";
import { AxiosResponse } from "axios";
import { QuizResponse } from "../../types";

export default {
  /**
   * returns the details for a quiz
   * @param {string} quizId - uuid of the quiz to be fetched
   * @returns {Promise<QuizResponse>} data corresponding to the quiz
   */
  async getQuiz(quizId: string): Promise<QuizResponse> {
    const response = await apiClient().get(quizEndpoint + quizId);
    return response.data;
  },
};
