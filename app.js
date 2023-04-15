

        function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,ko,ja,id,ms,th,vi,zh-CN,zh-TW', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL }, 'google_translate_element');
        }

        function changeToEN() {
            var language = document.getElementById("en").value;
            var selectField = document.querySelector("#google_translate_element select");
            for (var i = 0; i < selectField.children.length; i++) {
                var option = selectField.children[i];
                if (option.value == language) {
                    selectField.selectedIndex = i;
                    selectField.dispatchEvent(new Event('change'));
                    break;
                }
            }
        }
        function changeToCN() {
            var language = document.getElementById("cn").value;
            var selectField = document.querySelector("#google_translate_element select");
            for (var i = 0; i < selectField.children.length; i++) {
                var option = selectField.children[i];
                if (option.value == language) {
                    selectField.selectedIndex = i;
                    selectField.dispatchEvent(new Event('change'));
                    break;
                }
            }
        }
