var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organization = /** @class */ (function () {
    function Organization(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.Organization = [];
        this.employeer = [];
    }
    ;
    Organization.prototype.description = function () { console.log(this.id + " - " + this.name + " - " + this.salary + "azn"); };
    Organization.prototype.printOrganizationInformations = function () {
        console.log("Organization.length = ", this.Organization.length);
        console.log("Organization = ", this.Organization);
    };
    Organization.prototype.addOrganization = function (department) { this.Organization.push(department); };
    Organization.prototype.addEmployeer = function (name) { this.employeer.push(name); };
    Organization.prototype.printEmployeer = function () { console.log("employeer = ", this.employeer); };
    return Organization;
}());
console.log("-------------------------Department information Start----------------------------------");
var organization = new Organization(1, "Department", 2000);
console.log("-------------------------Accounting Department information Start----------------------------------");
var AccountingDepartments = /** @class */ (function (_super) {
    __extends(AccountingDepartments, _super);
    function AccountingDepartments(id, name, admin, report) {
        var _this = _super.call(this, id, name, 2000) || this;
        _this.admin = admin;
        _this.report = report;
        _this.newReport = [];
        return _this;
    }
    Object.defineProperty(AccountingDepartments.prototype, "recentlyReport", {
        get: function () {
            if (this.newReport) {
                return this.newReport.toString();
            }
            throw new Error("no report foundid");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please add new Reports");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartments.prototype.addReport = function (text) {
        this.report.push(text);
        this.newReport.push(text);
    };
    AccountingDepartments.prototype.printReports = function () { console.log(this.report); };
    AccountingDepartments.prototype.addEmployeer = function (name) { name !== "Ayten" && this.employeer.push(name); };
    return AccountingDepartments;
}(Organization));
var accountOrganization = new AccountingDepartments(2, "Accounting", ["Sevinc"], []);
//console.log("AccountOrganization RecentlyReport",accountOrganization.recentlyReport);// no report foundid 
//accountOrganization.recentlyReport = ""
//accountOrganization.recentlyReport = " ' GET RECENTLY REPORT WITH SET ' "
accountOrganization.addEmployeer("Ayten");
accountOrganization.description();
accountOrganization.addReport('"GET RECENTLY REPORT WITHOUT SET"');
console.log("AccountOrganization RecentlyReport", accountOrganization.recentlyReport);
console.log(accountOrganization.name, " ve admin : ", accountOrganization.admin);
console.log("-------------------------AccountingDepartment information End----------------------------------");
