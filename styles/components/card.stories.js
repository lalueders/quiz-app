import './card.css';

export default {
  title: 'Components/Card',
};

export const CardQuestion = () => `
<section class="card">
            <button data-js="button" class="card__bookmark">
              <svg
                data-js="check"
                class="card__bookmark-icon--unchecked"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="bookmark"
                class="svg-inline--fa fa-bookmark fa-w-12"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                />
              </svg>
              <svg
                data-js="uncheck"
                class="card__bookmark-icon--checked hidden"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bookmark"
                class="svg-inline--fa fa-bookmark fa-w-12"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
                />
              </svg>
            </button>
            <h2 class="card__heading">Question:</h2>
            <p class="card__question">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button data-js="buttonAnswer" class="card__button--hide">
              <span data-js="show-answer">Show Answer</span>
              <span data-js="hide-answer" class="hidden">Hide answer</span>
            </button>
            <article data-js="answer" class="hidden card__answer">
              <h2 class="card__heading">Answer:</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </article>
            <ul class="card__list" role="list">
              <li class="card__list-item">category 1</li>
              <li class="card__list-item">category 2</li>
              <li class="card__list-item">category 3</li>
              <li class="card__list-item">category 4</li>
            </ul>
          </section>`;

export const cardQuestionUnchecked = () =>
  `
<section class="card">
  <button class="card__bookmark" type="button" name="set-bookmark">
    <svg
      class="card__bookmark-icon--unchecked"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="bookmark"
      class="svg-inline--fa fa-bookmark fa-w-12"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
      />
    </svg>
  </button>
  <h2 class="card__heading">Question:</h2>
  <p class="card__question">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </p>
  <button class="card__button--show" type="button" name="show-answer">Show Answer</button>
  <ul class="card__list" role="list">
    <li class="card__list-item">category 1</li>
    <li class="card__list-item">category 2</li>
    <li class="card__list-item">category 3</li>
    <li class="card__list-item">category 4</li>
  </ul>
</section>
`;

export const CardQuestionChecked = () => `
<section class="card">
  <button class="card__bookmark" type="button" name="unset-bookmark">
    <svg
      class="card__bookmark-icon--checked"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bookmark"
      class="svg-inline--fa fa-bookmark fa-w-12"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
      />
    </svg>
  </button>
  <h2 class="card__heading">Question:</h2>
  <p class="card__question">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </p>
  <button class="card__button--show" type="button" name="show-answer">Show Answer</button>
  <ul class="card__list" role="list">
    <li class="card__list-item">category 1</li>
    <li class="card__list-item">category 2</li>
    <li class="card__list-item">category 3</li>
    <li class="card__list-item">category 4</li>
  </ul>
</section>`;

export const cardAnswerUnchecked = () => `
<section class="card">
  <button class="card__bookmark" type="button" name="set-bookmark">
    <svg
      class="card__bookmark-icon--unchecked"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="bookmark"
      class="svg-inline--fa fa-bookmark fa-w-12"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
      />
    </svg>
  </button>
  <h2 class="card__heading">Question:</h2>
  <p class="card__question">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </p>
  <button class="card__button--hide" type="button" name="hide-answer">Hide Answer</button>
  <article class="card__answer">
    <h2 class="card__heading">Answer:</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </article>
  <ul class="card__list" role="list">
    <li class="card__list-item">category 1</li>
    <li class="card__list-item">category 2</li>
    <li class="card__list-item">category 3</li>
    <li class="card__list-item">category 4</li>
  </ul>
</section>
`;

export const cardAnswerChecked = () => `
<section class="card">
  <button class="card__bookmark">
    <svg
      class="card__bookmark-icon--checked"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bookmark"
      class="svg-inline--fa fa-bookmark fa-w-12"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
      />
    </svg>
  </button>
  <h2 class="card__heading">Question:</h2>
  <p class="card__question">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </p>
  <button class="card__button--hide" type="button" name="hide-answer">Hide Answer</button>
  <article class="card__answer">
    <h2 class="card__heading">Answer:</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </article>
  <ul class="card__list" role="list">
    <li class="card__list-item">category 1</li>
    <li class="card__list-item">category 2</li>
    <li class="card__list-item">category 3</li>
    <li class="card__list-item">category 4</li>
  </ul>
</section>
`;
