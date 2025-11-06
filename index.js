
  const userInfo = {
  "username": "user1",
  "password": "password123"
}

function createLoginTracker(userInfo) {
  let attemptCount = 0

    const checkPassword = (passwordAttempt) => {
      attemptCount = attemptCount + 1;


      if (passwordAttempt === userInfo.password && attemptCount <= 3) {
        return (`Login successful`);
      } else if (passwordAttempt != userInfo.password && attemptCount <=3) {
        return (`Attempt ${attemptCount}: Login failed`);
      } else {
        return ("Account locked due to too many failed login attempts")
      }
    }
    return (attempt) => checkPassword(attempt)
} 
let user1Login = createLoginTracker(userInfo);
user1Login()

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};