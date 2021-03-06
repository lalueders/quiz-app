import './create.css';

export default {
  title: 'Components/Create',
};

export const Intro = () =>
  `
  <h2 class="mb-05em">Now It's Your Turn!</h2>
  <p class="mb-2em">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est deserunt
    debitis tempora laudantium vero quisquam nobis obcaecati aliquam. Omnis
    nostrum tempore praesentium doloremque et beatae cum expedita cupiditate
    voluptates.
  </p>
`;

export const Form = () =>
  `
  <form aria-labelledby="create-question" autocomplete="off">
    <label class="create__heading" for="add-question"
      >Add your question here:</label
    >
    <textarea
      class="mb-2em create__question"
      type="text"
      name="add-question"
      id="add-question"
      cols="20"
      rows="8"
      placeholder="What birds do not lay eggs? ..."
      required
    ></textarea>
    <label class="create__heading" for="add-answer"
      >Add your answer here:</label
    >
    <textarea
      class="mb-2em create__answer"
      type="text"
      name="add-answer"
      id="add-answer"
      cols="20"
      rows="8"
      placeholder="Male birds ..."
      required
    ></textarea>
    <label class="create__heading--small" for="keywords"
      >Don't forget to add some keywords to your question:</label
    >
    <input
      class="mb-2em create__keywords"
      type="text"
      id="keywords"
      placeholder="Movies, Sports, Music, Nature, Cars, ..."
      required
    />
  </form>
`;

export const SubmitBtn = () =>
  `
  <button class="create__button" type="submit">Submit</button>
`;
