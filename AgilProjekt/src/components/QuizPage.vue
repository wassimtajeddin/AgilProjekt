<script setup>    
</script>

<template>
  <div class="quiz-container">
    <h1>Quiz</h1>
    <h3>Question:</h3>
    <p>Which language has the most native speakers?</p>
    <label for="1"><input type="radio" name="quiz" id="1" value="1"> English</label>
    <label for="2"><input type="radio" name="quiz" id="2" value="2"> Spanish</label>
    <label for="3"><input type="radio" name="quiz" id="3" value="3"> Mandarin Chinese</label>
    <label for="4"><input type="radio" name="quiz" id="4" value="4"> French</label>
    <button type="submit" onclick="clickNextButton(1)">Next ❯</button>
    <h4>Play again <a href="">here</a></h4>
  </div>
</template>

<style scoped> 
h1 {
  color: #333;
}
.quiz-container {
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  align-items: center;
}
h3, h4 {
  color: #555;
}
p {
  color: #666;
}
label {
  display: flex;
  margin-bottom: 10px;
}
input[type="radio"] {
  margin-right: 10px;
}
button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
a {
  color: #3498db;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
