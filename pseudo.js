//Psudocode for the asignment

/* 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases */


START
    PROMPT "Enter your exam grade" grade
    PROMPT "Enter number of projects you completed" projectsCompleted


    STARTFUNCTION finalGrade(grade, projectsCompleted)

        IF grade > 90 OR projectsCompleted > 10
            finalGrade = 100
        ELSE IF grade > 75 AND projectsCompleted > 4
            finalGrade = 90
        ELSE IF grade > 50 AND projectsCompleted > 1
            finalGrade = 75
        ELSE
            finalGrade = 0
        ENDIF

        return finalGrade
    ENDFUNCTION

    PRINT "your final grade is " finalGrade(a, b)
END