import './profile.css';

export default {
  title: 'Components/Profile',
};

export const User = () =>
  `
<div class="profile__user">
  <img
    class="profile__user-img"
    src="https://source.unsplash.com/random/600x300"
    width="100"
    height="100"
  />
  <h2>Username</h2>
</div>
`;

export const AboutMe = () =>
  `
<h3 class="profile__heading">About Me:</h3>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </p>
`;

export const Skills = () =>
  `
<section class="profile__skills">
  <h3 class="profile__heading">Skills:</h3>
  <ul class="profile__skills-list" role="list">
    <li class="profile__skills-item">Skill 1</li>
    <li class="profile__skills-item">Skill 2</li>
    <li class="profile__skills-item">Skill 3</li>
    <li class="profile__skills-item">Skill 4</li>
    <li class="profile__skills-item">Skill 5</li>
    <li class="profile__skills-item">Skill 6</li>
    <li class="profile__skills-item">Skill 7</li>
    <li class="profile__skills-item">Skill 8</li>
  </ul>
</section>
`;

export const LogoutBtn = () =>
  `
<button class="profile__button">Logout</button>
`;
