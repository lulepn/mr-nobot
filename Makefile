
build:
	npx tsc

package: clean build
	mkdir extension
	zip extension/mr-nobot.zip manifest.json icon.png hello.html scripts/content.js scripts/popup.js

clean:
	rm -rf ./extension

stage: package
	mkdir -p '/mnt/d/Stuff/Mr. NoBot'
	cp -f ./extension/mr-nobot.zip '/mnt/d/Stuff/Mr. NoBot'
	unzip -o '/mnt/d/Stuff/Mr. NoBot/mr-nobot.zip' -d '/mnt/d/Stuff/Mr. NoBot/'