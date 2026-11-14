const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

const timeAgo = (past) => {
  const pastTime = new Date(past);
  const presentTime = new Date();
  console.log(presentTime.toISOString());
  if (presentTime < pastTime) {
    return "Check your past time!"
  }
  let msDiff = presentTime - pastTime;

  const oneMin = 1000 * 60; // 1 second = 1000 miliseconds!
  const oneHour = 60 * oneMin;
  const oneDay = 24 * oneHour;

  let days = Math.floor(msDiff / oneDay);
  msDiff %= oneDay;
  let hours = Math.floor(msDiff / oneHour);
  msDiff %= oneHour;
  let minutes = Math.floor(msDiff / oneMin);
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours >= 24) {
    hours = 0;
    days++;
  }
  
  if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else {
    return `${minutes}m ago`;
  }
}

const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  } else return views;
}

const forumCategory = (id) => {
  if (!(id in allCategories) || allCategories[id] === null) {
    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
  } else {
    const selectedCategory = allCategories[id].category;
    const selectedClassName = allCategories[id].className
    return `<a class="category ${selectedClassName}" href="${forumCategoryUrl}${selectedClassName}/${id}">${selectedCategory}</a>`
  }
}

const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((u) => u.id === poster.user_id);
      if (user) {
        const avatarSrc = user.avatar_template.replace("{size}", 30);
        const src = avatarSrc.startsWith("/") ? `${avatarUrl}${avatarSrc}` : avatarSrc;
        return `<img src="${src}" alt="${user.name}" />`;
      }
      return "";
    }).join("");
}

const postsContainer = document.getElementById("posts-container");

const showLatestPosts = (data) => {
  const {users, topic_list} = data;
  const {topics} = topic_list;

  postsContainer.innerHTML = topics
    .map((item) => {
      const {id, title, views, posts_count, slug, posters, category_id, bumped_at} = item;
      return `
        <tr>
          <td>
            <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
            ${forumCategory(category_id)}
          </td>
          <td>
            <div class="avatar-container">${avatars(posters, users)}</div>
          </td>
          <td>${posts_count - 1}</td>
          <td>${viewCount(views)}</td>
          <td>${timeAgo(bumped_at)}</td>
        </tr>
      `;
    }).join("");
}

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

fetchData();