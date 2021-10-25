player_1 = localStorage.getItem("player1");
player_2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_input_1").innerHTML = player_1 + ":";
document.getElementById("player_input_2").innerHTML = player_2 + ":";

document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;

document.getElementById("questionturn").innerHTML = "Question Turn: "+ player_1;
document.getElementById("answerturn").innerHTML = "Answer Turn: " + player_2;

function send()
{
   number1 = document.getElementById("no1_input").value;
   number2 = document.getElementById("no2_input").value;
   actual_answer = parseInt(number1) * parseInt(number2);

   question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
   input_box = "<br>Answer : <input type='text' id='input_box_id'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_number + input_box + check_button;

   document.getElementById("output").innerHTML = row;

   document.getElementById("number1").value = "";
   document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_box_id").value;

    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = score1+1;
            document.getElementById("score1").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = score2+1;
            document.getElementById("score2").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_input_1").innerHTML = "Question- " + player1_input;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_input_2").innerHTML = "Question- " + player2_input;
    }

    document.getElementById("output").innerHTML = "";
}