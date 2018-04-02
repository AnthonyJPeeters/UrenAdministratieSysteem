package main

import (
	"fmt"
	"net/http"
	"log"
	"strings"
	"strconv"
)

func main() {
	http.HandleFunc("/calc/", func(w http.ResponseWriter, r *http.Request) {
		var splittedString = strings.Split(r.URL.Path, "/" )
		 var finalResult float64
		finalResult = 1
		for _, element := range splittedString{
			fmt.Println(element)
			i, err := strconv.ParseFloat(element, 64)

			if err == nil {
				finalResult = i * finalResult
			}
		}

		fmt.Fprint(w, strconv.FormatFloat(finalResult, 'f', 2, 64))
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}