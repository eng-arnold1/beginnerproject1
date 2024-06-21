//switch statements

/*
switch (variable_expression) {
    case expr1:{  
        //statements
        break;
    }
    case expr2:{   
        //statements
        break;
    }
    default:
        break;
}
        */

//day of the week example

const get_day_of_the_week =(day) => {
    switch (day) {
        case "Mon":
            console.log("Monday");
            break;
        case "Tue" :
            console.log("Tuesday");
            break;
            case "Wed" :
            console.log("Wednesday");
            break;
            case "Thu" :
            console.log("Thursday");
            break;
            case "Fri" :
            console.log("Friday");
            break;
            case "Sat" :
            console.log("Saturday");
            break;
            case "Sun" :
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}
get_day_of_the_week("Wed");