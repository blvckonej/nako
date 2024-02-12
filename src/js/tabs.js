class tabs {
    tabContent
    tabItems
    tabCounter = null
    activeTab = null
    activeTabIndex = null

    tabActiveClass = 'active'
    tabActivatorDataName = 'data-tab-target'
    tabActivatorActiveClass = 'active'
    tabButtonDataAction = 'data-tab-action'
    tabNextAction = 'next'
    tabPrevAction = 'prev'
    tabScrollToStartClass = 'tab-scroll-to-start'
    tabCounterClass = 'tab-counter'

    constructor(tabContent, options = null) {
        this.tabContent = tabContent
        this.tabItems = Array.prototype.slice.call(this.tabContent.children)

        if (options) options.forEach((option, index) => this[index] = option)

        this.initTabCounterElement()
        this.tabItemsInit()
        this.initActionButtons()
    }

    tabItemsInit() {
        for (let i = 0; i < this.tabContent.children.length; i++) {
            const childTab = this.tabContent.children[i]

            // В случае, если есть класс активной вкладки на элементе, инициируем метод активации
            if (childTab.classList.contains(this.tabActiveClass))
                this.activateTab(childTab)

            this.getTabActivators(childTab).forEach(activator => {
                activator.addEventListener("click", (event) => {
                    this.activateTab(childTab, event)
                })
            })
        }
    }

    initTabCounterElement(element = null) {
        if (element)
            this.tabCounter = element
        else if (document.querySelectorAll('[data-tab-counter-target]')) {
            const tabCounters = document.querySelectorAll('[data-tab-counter-target]')

            tabCounters.forEach(tabCounter => {
                const tabTargetContent = document.querySelector(`#${tabCounter.dataset.tabCounterTarget}`)
                if (tabTargetContent === this.tabContent)
                    this.tabCounter = tabCounter;
                // console.log(this.tabCounter)
            })
        }
    }

    initActionButtons() {
        this.tabContent.querySelectorAll(`[${this.tabButtonDataAction}]`).forEach(actionButton => {
            actionButton.addEventListener('click', (event) => {
                event.preventDefault()
                const action = actionButton.dataset.tabAction
                if (action === this.tabNextAction) this.activateNextTab()
                if (action === this.tabPrevAction) this.activatePrevTab()
            })
        })
    }

    getTabActivators(tabItem) {
        return document.querySelectorAll(`[${this.tabActivatorDataName}="${tabItem.id}"]`)
    }

    activateTab(tabItem, event = null) {
        if (event != null) event.preventDefault()

        if (this.activeTab === tabItem) return;

        this.deactivateTab()

        if (!tabItem.classList.contains(this.tabActiveClass))
            tabItem.classList.add(this.tabActiveClass)

        this.getTabActivators(tabItem).forEach(activator => {
            if (!activator.classList.contains(this.tabActivatorActiveClass))
                activator.classList.add(this.tabActivatorActiveClass)
        })

        this.activeTab = tabItem
        this.activeTabIndex = this.tabItems.indexOf(this.activeTab)

        if (this.tabCounter != null) {
            this.tabCounter.textContent = `${this.activeTabIndex + 1}/${this.tabItems.length}`;
        }
    }

    activateNextTab() {
        if (this.activeTab === null && this.tabItems[this.activeTabIndex + 1] == null) return
        this.activateTab(this.tabItems[this.activeTabIndex + 1])
        this.scrollToStartTabContent()
    }

    scrollToStartTabContent() {
        const scrollToStartElement = this.tabContent.closest(`.${this.tabScrollToStartClass}`)
        if (scrollToStartElement) {
            scrollToStartElement.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
        }
    }

    activatePrevTab() {
        if (this.activeTab === null && this.tabItems[this.activeTabIndex - 1] == null) return
        this.activateTab(this.tabItems[this.activeTabIndex - 1])
        this.scrollToStartTabContent()
    }

    deactivateTab() {
        if (this.activeTab === null) return

        this.activeTab.classList.remove(this.tabActiveClass)
        this.getTabActivators(this.activeTab).forEach(activator => {
            activator.classList.remove(this.tabActivatorActiveClass)
        })
    }

    hasActiveTab() {
        return this.activeTab != null;
    }
}

export function tabsDefaultInit(options = null) {
    const tabContents = document.querySelectorAll('.tab-content')
    tabContents.forEach(tabContent => new tabs(tabContent, options))
}