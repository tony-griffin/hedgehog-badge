SHELL := /bin/bash

.PHONEY: serve
serve:
	@echo "Starting Development Server..." 
				npm start
				
.PHONEY: test
test:
				npm test --watchAll
		
PHONY: serve test