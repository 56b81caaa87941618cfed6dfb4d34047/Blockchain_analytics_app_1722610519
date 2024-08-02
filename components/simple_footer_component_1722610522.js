/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722610522", {
    template: `
`<footer id="footer-section" class="flex-1 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg backdrop-filter dark:bg-gray-800">
    <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        <div id="footer-content" class="text-center">
            <div class="flex">
                <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                    BlockChain Insights
                </a>
            </div>
        </div>
        <div class="flex">
            <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                Stay ahead of the curve with our cutting-edge blockchain data analysis tools. Gain valuable insights and make informed decisions in the ever-evolving cryptocurrency landscape.
            </div>
        </div>
    </div>
</footer>`
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
