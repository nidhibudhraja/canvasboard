import { AddBlockEditorParameters } from 'src/interfaces/add-block-parameters';
import { PluginComponent } from 'src/interfaces/plugin-component';

declare var $: any;

export class AddTopComponent implements PluginComponent {
    constructor() {}

    // Top HTML Tag
    addHTMLCode(uid) {
        $(`#cb-buttons-${uid}`).append(`
          <!-- top -->
            <div class="tool box5 m-1"  title="Add Card Top">
              <button class="btn btn-light" id="add-new-box-prev-${uid}">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-up" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5
                    3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
            </div>
      `);
    }

    // Top HTML Tag Click Action
    addClickFunction = (uid, addBlockEditor) => {
        // Adding click action of above button
        $(`#add-new-box-prev-${uid}`).click(() => {
            addBlockEditor({
                id: `cb-box-1-${uid}`,
                pluginComponent: this,
                addBefore: true,
            });
        });
    };

    // Adding Top
    addToolBox = (uid, addBlockEditor) => {
        addBlockEditor({
            id: `cb-box-1-${uid}`,
            pluginComponent: this,
            addBefore: true,
        });
    };
}
