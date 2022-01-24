class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
  }

  async getGithubData(username) {
    const responseUsers = await fetch(this.url + username);
    const responseRepo = await fetch(this.url + username + "/repos");
    const following = await fetch(this.url + username + "/following");
    const followers = await fetch(this.url + username + "/followers");

    const userData = await responseUsers.json();
    const repoData = await responseRepo.json();

    // /*

    //takipçi denemesi

    const followingData = await following.json();
    const followersData = await followers.json();

    
    const arrFollowing = [];
    const arrFollowers = [];
    followingData.forEach(function (element) {
      arrFollowing.push(element.login);
    });

    followersData.forEach(function (element) {
      arrFollowers.push(element.login);
    });

    var difference = arrFollowing.filter(x => arrFollowers.indexOf(x) === -1);
    console.log(difference);
    // */
    return {
      user: userData,
      repo: repoData,
      userFollowing: followingData,
      userFollowers: followersData,
    };
  }
}
